import css from './Statistics.module.css';

export const Statistics = ({ title, data }) => {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>{title}</h2>

      <ul className={css['stat-list']}>
        {data.map(({ id, label, percentage }) => (
          <li className={css.item} key={id}>
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

// var box = document.createElement('div');

// box.style.backgroundColor = `rgb(${getRandom(0, 255)}, ${getRandom(0, 255)}, ${getRandom(0, 255)})`;

// function getRandom(min, max){
//   return Math.ceil(Math.random() * (max - min) + min))
// }
