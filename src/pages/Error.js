import React from 'react'
import Layout from '../components/layouts/Layout'

export default function Error() {
  return (
    <Layout>
      <div className="text-center">
        <h2 className="text-bluegeneraleinformation font-[700] font-[30px]">Error 404</h2>
        <p>Désolé, page introuvable, veuillez renouveler votre recherche.</p>
      </div>
    </Layout>
  );
}
