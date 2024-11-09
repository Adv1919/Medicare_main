import React from "react";
import "./style/Features.css";
import { useTranslation } from 'react-i18next';

function Features() {
  const { t } = useTranslation();
  return (
    <div className="feature-cards">
      <div className="feature-card">
        <h3>{t('Line1')}</h3>
        <p>{t('Line2')}</p>
      </div>
      <div className="feature-card">
        <h3>{t('Line3')}</h3>
        <p>{t('Line4')}</p>
      </div>
      <div className="feature-card">
        <h3>{t('Line5')}</h3>
        <p>{t('Line6')}</p>
      </div>
    </div>
  );
}

export default Features;

