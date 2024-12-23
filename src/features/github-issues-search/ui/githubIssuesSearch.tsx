import { FC } from 'react';
import { useForm } from 'react-hook-form';
import styles from './githubIssuesSearch.module.scss';
import { useAddDynamicReducer, useAppDispatch } from 'shared/lib/store';
import { fetchIssues, fillSearchParams, issuesReducer, resetIssues } from 'entities/issues';

type FormData = {
  username: string;
  repository: string;
};

export const GithubIssuesSearch: FC = function GithubIssuesSearch() {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const { registerReducer } = useAddDynamicReducer();

  const onSubmit = async ({ username, repository }: FormData) => {
    await registerReducer('issuesReducer', issuesReducer);
    await dispatch(resetIssues());
    dispatch(fillSearchParams({ user: username, repo: repository }));
    dispatch(fetchIssues({ user: username, repo: repository, page: 1 }));
  };

  return (
    <form
      className={styles['github-issues-search']}
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        type="text"
        placeholder="Username"
        className={styles['github-issues-search__input']}
        {...register('username', { required: 'Username is required' })}
      />
      {errors.username && (
        <span className={styles['github-issues-search__error']}>
          {errors.username.message}
        </span>
      )}

      <input
        type="text"
        placeholder="Repository"
        className={styles['github-issues-search__input']}
        {...register('repository', { required: 'Repository is required' })}
      />
      {errors.repository && (
        <span className={styles['github-issues-search__error']}>
          {errors.repository.message}
        </span>
      )}

      <button type="submit" className={styles['github-issues-search__button']}>
        search
      </button>
    </form>
  );
};
