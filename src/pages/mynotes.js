import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';

import NoteFeed from '../components/NoteFeed';
import { GET_MY_NOTES } from '../gql/query';

function MyNotes() {
  const { loading, error, data } = useQuery(GET_MY_NOTES);

  useEffect(() => {
    document.title = 'My Notes — Notedly';
  });

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  if (data.me.notes.length !== 0) {
    return <NoteFeed notes={data.me.notes} />;
  }

  return <p>No notes yet</p>;
}

export default MyNotes;
