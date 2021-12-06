import React from "react";
import { Icon } from '@iconify/react';
import figmaIcon from '@iconify/icons-logos/figma';
import html5 from '@iconify/icons-logos/html-5';
import phpAlt from '@iconify/icons-logos/php-alt';
import pugIcon from '@iconify/icons-logos/pug';
import css3 from '@iconify/icons-logos/css-3';
import sassIcon from '@iconify/icons-logos/sass';
import javascriptIcon from '@iconify/icons-logos/javascript';
import jqueryIcon from '@iconify/icons-logos/jquery';
import reactIcon from '@iconify/icons-logos/react';
import reactRouter from '@iconify/icons-logos/react-router';
import nodejsIcon from '@iconify/icons-logos/nodejs';
import gulpIcon from '@iconify/icons-logos/gulp';
import pythonIcon from '@iconify/icons-logos/python';
import postgresqlIcon from '@iconify/icons-logos/postgresql';
import nextjsIcon from '@iconify/icons-logos/nextjs-icon';
import ubuntuIcon from '@iconify/icons-logos/ubuntu';

export default function CircleIcons() {

  return (
      <div className="d-inline-block">
        <Icon className="display-1 m-2" icon={figmaIcon} />
        <Icon className="display-1 m-2" icon={html5} />
        <Icon className="display-1 m-2" icon={phpAlt} />
        <Icon className="display-1 m-2" icon={pugIcon} />
        <Icon className="display-1 m-2" icon={css3} />
        <Icon className="display-1 m-2" icon={sassIcon} />
        <Icon className="display-1 m-2" icon={javascriptIcon} />
        <Icon className="display-1 m-2" icon={jqueryIcon} />
        <Icon className="display-1 m-2" icon={reactIcon} />
        <Icon className="display-1 m-2" icon={reactRouter} />
        <Icon className="display-1 m-2" icon={nodejsIcon} />
        <Icon className="display-1 m-2" icon={gulpIcon} />
        <Icon className="display-1 m-2" icon={pythonIcon} />
        <Icon className="display-1 m-2" icon={postgresqlIcon} />
        <Icon className="display-1 m-2" icon={nextjsIcon} />
        <Icon className="display-1 m-2" icon={ubuntuIcon} />

      </div>
  );
}
