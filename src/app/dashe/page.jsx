import styles from "./connexion.module.css";

export default function dash() {
  return (
    <div>
      <div class={styles.container}>
        <div class={styles.sidebar}>
          <h2>Menu</h2>
          <ul>
            <li>
              <a href="">Tableau de bord</a>
            </li>
            <li>
              <a href="#users">Utilisateurs</a>
            </li>
            <li>
              <a href="#content">Gestion du contenu</a>
            </li>
          </ul>
        </div>
        <div className={styles.content}>
          <h1>Interface Administrateur</h1>

          <div id="dashboard" className={styles.dashboard}>
            <div class="card">
              <h2>Statistiques</h2>
              <canvas id="statsChart" className={styles.canvas}></canvas>
            </div>
            <div className={styles.card}>
              <h2>Utilisateurs inscrits</h2>
              <p id="userCount">42 apprenants inscrits</p>
            </div>
            <div className={styles.card}>
              <h2>Contenu total</h2>
              <p id="contentCount">80 contenus</p>
            </div>
          </div>

          <div id="users">
            <h2>Liste des utilisateurs</h2>
            <table className={styles.table} id="userTable">
              <thead>
                <tr>
                  <th className={styles.th}>Photo</th>
                  <th className={styles.th}>ID</th>
                  <th className={styles.th}>Nom</th>
                  <th className={styles.th}>Email</th>
                  <th className={styles.th}>Date dinscription</th>
                </tr>
                <tr>
                  <td className={styles.td}></td>
                  <td className={styles.td}>1</td>
                  <td className={styles.td}>ASSEKO MVE</td>
                  <td className={styles.td}>assekoazareel@gmail.com</td>
                  <td className={styles.td}>16/03/2023 </td>
                </tr>

                <tr>
                  <td className={styles.td}></td>
                  <td className={styles.td}>2</td>
                  <td className={styles.td}>MOUGOULA</td>
                  <td className={styles.td}>stevine@gmail.com</td>
                  <td className={styles.td}>16/03/2023 </td>
                </tr>

                <tr>
                  <td className={styles.td}></td>
                  <td className={styles.td}>3</td>
                  <td className={styles.td}>Azareel</td>
                  <td className={styles.td}>assekoazareel@gmail.com</td>
                  <td className={styles.td}>16/03/2023 </td>
                </tr>

                <tr>
                  <td className={styles.td}></td>
                  <td className={styles.td}>1</td>
                  <td className={styles.td}>ASSEKO MVE</td>
                  <td className={styles.td}>assekoazareel@gmail.com</td>
                  <td className={styles.td}>16/03/2023 </td>
                </tr>

                <tr>
                  <td className={styles.td}></td>
                  <td className={styles.td}>1</td>
                  <td className={styles.td}>ASSEKO MVE</td>
                  <td className={styles.td}>assekoazareel@gmail.com</td>
                  <td className={styles.td}>16/03/2023 </td>
                </tr>
              </thead>
              <tbody></tbody>
            </table>
          </div>

          <div id="content">
            <h2>Gestion du contenu</h2>
            <a href="#" className={styles.btn} id="addContentBtn">
              Ajouter du contenu
            </a>
            <table className={styles.table} id="contentTable">
              <thead>
                <tr>
                  <th className={styles.th}>ID</th>
                  <th className={styles.th}>Titre</th>
                  <th className={styles.th}>Type</th>
                  <th className={styles.th}>Date de création</th>
                  <th className={styles.th}>Actions</th>
                </tr>
                <tr>
                  <td className={styles.td}>1</td>
                  <td className={styles.td}> TP physique</td>
                  <td className={styles.td}>document PDF</td>
                  <td className={styles.td}>16/07/2002</td>
                  <td className={styles.td}> exercise diriger </td>
                </tr>

                <tr>
                  <td className={styles.td}>2</td>
                  <td className={styles.td}>TP physique</td>
                  <td className={styles.td}>document PDF</td>
                  <td className={styles.td}>16/07/2002</td>
                  <td className={styles.td}>exercise diriger </td>
                </tr>
                <tr>
                  <td className={styles.td}>3</td>
                  <td className={styles.td}>TP math</td>
                  <td className={styles.td}>document PDF</td>
                  <td className={styles.td}>16/07/2002</td>
                  <td className={styles.td}>exercise diriger </td>
                </tr>
                <tr>
                  <td className={styles.td}>4</td>
                  <td className={styles.td}>TP physique</td>
                  <td className={styles.td}>document PDF</td>
                  <td className={styles.td}>16/07/2002</td>
                  <td className={styles.td}>exercise diriger </td>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
