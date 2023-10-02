import { SingleValue } from 'react-select';

export const handleSelectChange = (
  e: SingleValue<{ label: string; value: string }>,
  changeLanguage: (lng: string) => void
) => {
  switch (e?.value) {
    case 'Ua':
      changeLanguage('ua');
      break;

    case 'En':
      changeLanguage('en');
      break;

    default:
      changeLanguage('en');
      break;
  }
};
