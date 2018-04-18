import 'react-native';
import React from 'react';
import ClubDaysCardDate from '../../src/Components/ClubDaysCardDate'
import renderer from 'react-test-renderer'

describe('ClubDaysCardDate component', () => {
  const nextClubdayDate = new Date();
  it('renders correctly if nextClubdayDate is provided', () => {
    const card = renderer.create(<ClubDaysCardDate nextClubdayDate={nextClubdayDate} />).toJSON()
    expect(card).toMatchSnapshot();
  })

  it('does not render if date is not provided', () => {
    const card = renderer.create(<ClubDaysCardDate nextClubdayDate={nextClubdayDate} show={false} />).toJSON()
    expect(card).toMatchSnapshot();
  })

})
