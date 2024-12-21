import React from 'react';
import { getUsers } from '@/services/userService';
import { useQuery } from '@tanstack/react-query';

const Home: React.FC = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['users'],
    queryFn: getUsers,
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error instanceof Error ? error.message : 'An error occurred'}</p>;

  return <ul>{data?.map((user) => <li key={user.id}>{user.name}</li>)}</ul>;
};

export default Home;
