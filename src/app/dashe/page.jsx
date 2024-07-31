import styles from "./connexion.module.css";

export default function dash() {
  return (
    <div className={styles.container}>
    <aside className={styles.sidebar}>
      <h1>Admin Dashboard</h1>
      <nav>
        <ul>
          <li><a href="#"><i className={styles.fasFaHome}></i> Accueil</a></li>
          <li><a href="#"><i className={styles.fasFaHsers}></i> Utilisateurs</a></li>
          <li><a href="#"><i className={styles.fasFaBook}></i> Cours</a></li>
          <li><a href="#"><i className={styles.fasFaChartBar}></i> Statistiques</a></li>
          <li><a href="#"><i className={styles.fasFaCog}></i> Paramètres</a></li>
        </ul>
      </nav>
    </aside>

    <main className={styles.mainContent}>
      <header className={styles.dashboardHeader}>
        <h2>Tableau de Bord</h2>
        <div className={styles.userInfo}>
          <span>Bienvenue, Admin</span>
        </div>
      </header>

      <section className={styles.quickStats}>
        <div className={styles.statCard}>
          <h3>Utilisateurs Actifs</h3>
          <p>1,234</p>
        </div>
        <div className={styles.statCard}>
          <h3>Cours Publiés</h3>
          <p>87</p>
        </div>
        <div className={styles.statCard}>
          <h3>Inscriptions Aujourd hui</h3>
          <p>52</p>
        </div>
        <div className={styles.statCard}>
          <h3>Taux de Complétion</h3>
          <p>76%</p>
        </div>
      </section>

      <section className={styles.chartContainer}>
        <div className={styles.chart}>
          <h3>Inscriptions par Mois</h3>
          <canvas id={styles.enrollmentChart}></canvas>
        </div>
        <div className={styles.chart}>
          <h3>Répartition des Cours</h3>
          <canvas id={styles.courseDistributionChart}></canvas>
        </div>
      </section>

      <section className={styles.recentActivities}>
        <h3>Activités Récentes</h3>
        <ul className={styles.activityList}>
          <li class={styles.activityItem}>
            <i className={styles.fas}></i>
            <div className={styles.activityDetails}>
              <span>Nouvel utilisateur inscrit : <strong>Marie Dupont</strong></span>
              <span className={styles.activityTime}>Il y a 5 minutes</span>
            </div>
          </li>
          <li className={styles.activityItem}>
            <i className={styles.fase}></i>
            <div className={styles.activityDetails}>
              <span>Nouveau cours publié : <strong>Introduction à la Physique Quantique</strong></span>
              <span className={styles.activityTime}>Il y a 2 heures</span>
            </div>
          </li>
          <li className={styles.activityItem}>
            <i className={styles.fases}></i>
            <div className={styles.activityDetails}>
              <span>Nouveau commentaire sur le cours : <strong>Algèbre Linéaire</strong></span>
              <span className={styles.activityTime}>Il y a 4 heures</span>
            </div>
          </li>
        </ul>
      </section>
    </main>
  </div>

  );
}
