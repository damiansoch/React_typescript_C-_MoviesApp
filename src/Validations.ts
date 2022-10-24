import * as Yup from 'yup';

const configureValidations = () => {
  Yup.addMethod(Yup.string, 'firstLetterUpprecase', function () {
    return this.test(
      'first-letter-uppercase',
      'First letter must be uppercase',
      function (value) {
        if (value && value.length > 0) {
          const firstLetter = value.substring(0, 1);
          return firstLetter === firstLetter.toLocaleUpperCase();
        }
        return true;
      }
    );
  });
};

export default configureValidations;
