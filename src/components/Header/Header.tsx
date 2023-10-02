import React from 'react';
import Select from 'react-select';
import { Link } from 'react-router-dom';
import { languageOptions } from '../../servises/lenguages';
import css from './Header.module.css';
import { useTranslation } from 'react-i18next';
import { handleSelectChange } from '../../utils/halpers/select';

export const Header = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className={css.header}>
      <div>
        <Link className={css.logo} to="/">
          Levios
        </Link>
      </div>
      <div className={css.langToggle}>
        <Select
          name="language"
          options={languageOptions}
          defaultValue={languageOptions[0]}
          onChange={e => handleSelectChange(e, changeLanguage)}
        />
      </div>
    </header>
  );
};
