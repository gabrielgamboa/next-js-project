import React from 'react';
import axios from 'axios';

import Link from 'next/link'; //navegar entre as páginas obtendo apenas o JSON e não o HTML

function Users({ users }) {
  return (
    <div>
      {users.map(user => (
        <div>
         <Link href="/profile/[id]" as={`/profile/${user.id}`}><a>{user.name}</a></Link>
        </div>
      ))}
    </div>
  );
}

export async function /*getServerSideProps*/ getStaticProps(context) {
  const response = await axios.get('https://jsonplaceholder.typicode.com/users');
  const data = await response.data;

  return {
    props: { users: data },
  }
}

export default Users;