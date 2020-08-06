import React from 'react';
import PageHeader from '../../components/PageHeader';

function TeacherForm() {
  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Que incrível que você quer dar aulas."
        description="O primeiro passo é preencher esse formulário de inscreição"
      />
      <main>
        <fieldset>
          <legend>Seus dados</legend>

          <div className="imput-block">
            <label htmlFor="name">Nome completo</label>
            <input type="text" id="name" />
          </div>

          <div className="imput-block">
            <label htmlFor="avatar">Avatar</label>
            <input type="text" id="avatar" />
          </div>

          <div className="imput-block">
            <label htmlFor="whatsapp">Whatsapp</label>
            <input type="text" id="whatsapp" />
          </div>

        </fieldset>
      </main>
    </div>
  )
}

export default TeacherForm;