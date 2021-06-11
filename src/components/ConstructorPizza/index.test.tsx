import { render, screen, fireEvent } from '@testing-library/react';

import ConstructorPizza from './index';
import SammaryPizzaProvider from '../../contexts/SummaryPizzaContext';

describe('ConstructorPizza', () => {
  const onSubmit = jest.fn();
  it('renders correctly', () => {
    const { container } = render(
      <SammaryPizzaProvider>
        <ConstructorPizza onSubmit={onSubmit} />
      </SammaryPizzaProvider>
    );

    const controlElements = screen.queryAllByText('tomato');
    expect(controlElements.length).toBe(2);

    const radioSizeElem = screen.getByLabelText('30cm');
    expect(radioSizeElem).toBeChecked();

    const radioDoughElem = screen.getByLabelText('thin');
    expect(radioDoughElem).toBeChecked();

    expect(container).toContainHTML('Size:');
    expect(container).toContainHTML('Dough:');
    expect(container).toContainHTML('Sauces:');
    expect(container).toContainHTML('Сheeses:');
    expect(container).toContainHTML('Vegetables:');
    expect(container).toContainHTML('Meat:');
    expect(container).toContainHTML('Show order');
    expect(container).toContainHTML('30cm');
    expect(container).toContainHTML('35cm');
    expect(container).toContainHTML('fluffy');
    expect(container).toContainHTML('thin');
    expect(container).toContainHTML('white');
    expect(container).toContainHTML('spicy');
    expect(container).toContainHTML('mozzarella');
    expect(container).toContainHTML('dorblue');
    expect(container).toContainHTML('chedar');
    expect(container).toContainHTML('mushroom');
    expect(container).toContainHTML('pepper');
    expect(container).toContainHTML('bacon');
    expect(container).toContainHTML('pepperoni');
    expect(container).toContainHTML('ham');
  });

  it('changes value pizza size', () => {
    const onSubmit = jest.fn();

    render(
      <SammaryPizzaProvider>
        <ConstructorPizza onSubmit={onSubmit} />
      </SammaryPizzaProvider>
    );
    const radioSizeSmallElem = screen.getByLabelText('30cm');
    const radioSizeMediumElem = screen.getByLabelText('35cm');

    expect(radioSizeSmallElem).toBeChecked();
    expect(radioSizeMediumElem).not.toBeChecked();

    fireEvent.click(radioSizeMediumElem);
    expect(radioSizeSmallElem).not.toBeChecked();
    expect(radioSizeMediumElem).toBeChecked();
  });

  it('changes value pizza dough', () => {
    const onSubmit = jest.fn();

    render(
      <SammaryPizzaProvider>
        <ConstructorPizza onSubmit={onSubmit} />
      </SammaryPizzaProvider>
    );
    const radioDoughFluffy = screen.getByLabelText('fluffy');
    const radioDoughThin = screen.getByLabelText('thin');

    fireEvent.click(radioDoughFluffy);
    expect(radioDoughFluffy).toBeChecked();
    expect(radioDoughThin).not.toBeChecked();
  });

  it('changes value pizza dough', () => {
    const onSubmit = jest.fn();

    render(
      <SammaryPizzaProvider>
        <ConstructorPizza onSubmit={onSubmit} />
      </SammaryPizzaProvider>
    );
    const radioDoughFluffy = screen.getByLabelText('fluffy');
    const radioDoughThin = screen.getByLabelText('thin');

    expect(radioDoughFluffy).not.toBeChecked();
    expect(radioDoughThin).toBeChecked();

    fireEvent.click(radioDoughFluffy);
    expect(radioDoughFluffy).toBeChecked();
    expect(radioDoughThin).not.toBeChecked();
  });

  it('changes value pizza sauces', () => {
    const onSubmit = jest.fn();

    render(
      <SammaryPizzaProvider>
        <ConstructorPizza onSubmit={onSubmit} />
      </SammaryPizzaProvider>
    );

    const radioSaucesWhite = screen.getByLabelText('white');
    const radioSaucesSpicy = screen.getByLabelText('spicy');

    expect(radioSaucesWhite).not.toBeChecked();
    expect(radioSaucesSpicy).not.toBeChecked();

    fireEvent.click(radioSaucesWhite);

    expect(radioSaucesWhite).toBeChecked();
    expect(radioSaucesSpicy).not.toBeChecked();

    fireEvent.click(radioSaucesSpicy);

    expect(radioSaucesWhite).not.toBeChecked();
    expect(radioSaucesSpicy).toBeChecked();
  });

  it('changes value pizza cheeses', () => {
    const onSubmit = jest.fn();

    render(
      <SammaryPizzaProvider>
        <ConstructorPizza onSubmit={onSubmit} />
      </SammaryPizzaProvider>
    );

    const radioSaucesMozzarella = screen.getByLabelText('mozzarella');
    const radioSaucesDorblue = screen.getByLabelText('dorblue');
    const radioSaucesChedar = screen.getByLabelText('chedar');

    expect(radioSaucesMozzarella).not.toBeChecked();
    expect(radioSaucesDorblue).not.toBeChecked();
    expect(radioSaucesChedar).not.toBeChecked();

    fireEvent.click(radioSaucesMozzarella);

    expect(radioSaucesMozzarella).toBeChecked();
    expect(radioSaucesDorblue).not.toBeChecked();
    expect(radioSaucesChedar).not.toBeChecked();
  });

  it('changes value pizza vegetables', () => {
    const onSubmit = jest.fn();

    render(
      <SammaryPizzaProvider>
        <ConstructorPizza onSubmit={onSubmit} />
      </SammaryPizzaProvider>
    );

    const radioSaucesMushroom = screen.getByLabelText('mushroom');
    const radioSaucesPepper = screen.getByLabelText('pepper');

    expect(radioSaucesMushroom).not.toBeChecked();
    expect(radioSaucesPepper).not.toBeChecked();

    fireEvent.click(radioSaucesMushroom);

    expect(radioSaucesMushroom).toBeChecked();
    expect(radioSaucesPepper).not.toBeChecked();
  });

  it('changes value pizza meat', () => {
    const onSubmit = jest.fn();

    render(
      <SammaryPizzaProvider>
        <ConstructorPizza onSubmit={onSubmit} />
      </SammaryPizzaProvider>
    );

    const radioSaucesBacon = screen.getByLabelText('bacon');
    const radioSaucesPepperoni = screen.getByLabelText('pepperoni');
    const radioSaucesHam = screen.getByLabelText('ham');

    expect(radioSaucesBacon).not.toBeChecked();
    expect(radioSaucesPepperoni).not.toBeChecked();
    expect(radioSaucesHam).not.toBeChecked();

    fireEvent.click(radioSaucesPepperoni);

    expect(radioSaucesPepperoni).toBeChecked();
    expect(radioSaucesBacon).not.toBeChecked();
    expect(radioSaucesHam).not.toBeChecked();
  });
});
