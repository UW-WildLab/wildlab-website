import React from 'react';
import ContactForm from './ContactForm';
import { MiniBanner, withTitle } from '../../components';

const title = 'Contact Us';

const Contact = () => (
  <div>
    <MiniBanner fullWidth noPadding title={title} />
    <ContactForm />
  </div>
);

export default withTitle(title)(Contact);
