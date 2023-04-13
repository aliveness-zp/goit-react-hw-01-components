import PropTypes from 'prop-types';

import css from './Statistics.module.css';

export const Statistics = ({ title, data }) => {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>{title}</h2>

      <ul className={css['stat-list']}>
        {data.map(({ id, label, percentage }) => (
          <li
            className={css.item}
            key={id}
            style={{
              backgroundColor: `rgb(${getRandom(0, 255)}, ${getRandom(
                0,
                255
              )}, ${getRandom(0, 255)})`,
            }}
          >
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

function getRandom(min, max) {
  return Math.ceil(Math.random() * (max - min) + min);
}

Statistics.propTypes = {
  title: PropTypes.string,
  data: PropTypes.array,
};
