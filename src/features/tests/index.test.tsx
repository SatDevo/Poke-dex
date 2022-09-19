

// Unit Testing From my last projet

// 1 - testing scenes and views

/*

import React from 'react'

import { shallow } from 'enzyme'

import MyItineraryScene from 'features/my-itinerary/my-itinerary-screen/MyItinerary.scene'

import {
  contentData,
  dataApiFixture,
} from 'features/my-itinerary/my-itinerary-screen/tests/mock'

import attractionsData from 'testing/utils/mocks/content/feature/attraction'

import { utils } from 'features/my-itinerary/adapters'

jest.mock('features/my-itinerary/adapters/orion/inventoryAdapter')

describe('AllAccessDateSelection', () => {
  const MyItinerarySceneWrapper = shallow<typeof MyItineraryScene>(
    <MyItineraryScene
      content={contentData}
      dataApi={dataApiFixture}
      attractionData={attractionsData}
      onPressBackArrow={() => jest.fn()}
      onPressBookExperience={() => jest.fn()}
    />,
  )

  afterAll(() => {
    // Add clean up
    jest.clearAllMocks()
  })

  const TimeLineCardsWrapper = MyItinerarySceneWrapper.find(
    'TimeLineCards',
  ).dive()

  it('Expect timeline cards to be rendered', () => {
    expect(TimeLineCardsWrapper.find('WrapperWithTitle')).toHaveLength(2)
  })

  it('expect all access layout palces first', () => {
    expect(
      TimeLineCardsWrapper.find('WrapperWithTitle').at(0).find('CardShortCut'),
    ).toBeTruthy()
  })

  it('expect all access card to be rendred', () => {
    // Check available all day tag exists
    expect(
      TimeLineCardsWrapper.find({
        children: contentData.allAccessContent.tag,
      }).exists(),
    ).toBeTruthy()

    // Check all access card shortcut exists

    const CardShortCut = TimeLineCardsWrapper.find('CardShortCut')

    // Simulate show Qr Code

    CardShortCut.simulate('click')

    expect(CardShortCut.exists()).toBeTruthy()

    // Check guest number to be 2

    expect(CardShortCut.prop('boxItems')[1].text).toEqual(
      `${dataApiFixture.data[3].partyMix.length} ${contentData.common.guest}`,
    )
  })

  it('expect DPA passe to be rendred', () => {
    // Check valid from exists and adapted to market Fr-Fr
    expect(
      TimeLineCardsWrapper.find({
        children: utils.getValidFrom(
          contentData.common.validFrom,
          dataApiFixture.data[5]?.attraction.nextTimeSlotStartDateTime,
        ),
      }).exists(),
    ).toBeTruthy()

    // Check all access card shortcut exists

    const CardRecovery = TimeLineCardsWrapper.find('CardRecovery')

    expect(CardRecovery.exists()).toBeTruthy()

    // Check guest number to be 2

    expect(CardRecovery.prop('numberOfGuest')).toEqual(
      `${dataApiFixture.data[5].partyMix.length} ${contentData.common.guest}`,
    )
  })

  it('expect DPA passed passe to be rendred', () => {
    // Check earlier today label
    expect(
      MyItinerarySceneWrapper.find({
        children: contentData.earlierToday,
      }).exists(),
    ).toBeTruthy()

    // Check Passed ADR Card exists

    const CardRecovery = MyItinerarySceneWrapper.find('CardRecovery')

    expect(CardRecovery.exists()).toBeTruthy()

    // Check disabled prop to be true

    expect(CardRecovery.prop('disabled')).toBeTruthy()

    // Check guest number to be 1

    expect(CardRecovery.prop('numberOfGuest')).toEqual(
      `${dataApiFixture.data[6].partyMix.length} ${contentData.common.guest}`,
    )
  })

  it('can simulate scene events', () => {
    // Simulate scroll event

    const event = {
      nativeEvent: {
        contentOffset: {
          y: 100,
          x: 100,
        },
      },
    }

    const ScrollViewWrapper = MyItinerarySceneWrapper.find('ScrollView')

    ScrollViewWrapper.simulate('scroll', event)

    // Simulate back arrow click
    const HeaderWrapper = MyItinerarySceneWrapper.find('Header')

    HeaderWrapper.simulate('click')

    // Simulate book experience click
    const StickyBottomCtaWrapper = MyItinerarySceneWrapper.find(
      'StickyBottomCta',
    )

    StickyBottomCtaWrapper.simulate('click')
  })

  it('expect Empty screen passe to be rendred', () => {
    const newDataTickets = { ...dataApiFixture }
    newDataTickets.data = []

    MyItinerarySceneWrapper.setProps({ dataApi: newDataTickets })
    MyItinerarySceneWrapper.update()

    expect(
      MyItinerarySceneWrapper.find({
        children: contentData.emptyData.title,
      }).exists(),
    ).toBeTruthy()
  })

  it('expect Loadable to be rendred', () => {
    const newDataTickets = { ...dataApiFixture }
    newDataTickets.isFetching = true

    MyItinerarySceneWrapper.setProps({ dataApi: newDataTickets })
    MyItinerarySceneWrapper.update()

    expect(MyItinerarySceneWrapper.find('Loadable')).toBeTruthy()
  })
})

*/

// 2 - testing atoms and components

/*

import React from 'react'

import { shallow } from 'enzyme'

import Card from 'components/molecules/card-shortcut'

import { ImageRatios } from 'constants/layout'

import {
  dataItinerary,
  dataWallet,
} from 'components/molecules/card-shortcut/fixtures'

describe('Shortcut card', () => {
  const CardAllAccessWrapper = shallow<typeof Card>(<Card {...dataItinerary} />)
  const cardWalletWrapper = shallow<typeof Card>(<Card {...dataWallet} />)

  afterAll(() => {
    // Add clean up
    jest.clearAllMocks()
  })

  const roundedHeader = CardAllAccessWrapper.find({ ratio: ImageRatios.middle })
  const touchableOpacity = CardAllAccessWrapper.find('TouchableOpacity')
  const title = CardAllAccessWrapper.find('Text')
  const button = CardAllAccessWrapper.find('ButtonWithRipple')

  it('expect default layout to be rendered', () => {
    expect(roundedHeader.exists()).toBeTruthy()

    expect(title.exists()).toBeTruthy()

    expect(touchableOpacity.exists()).toBeTruthy()

    expect(
      CardAllAccessWrapper.find('Memo(ThumbnailWithRightIcon)').exists(),
    ).toBeFalsy()

    expect(button.exists()).toBeTruthy()
  })

  it('expect shortcut layout to be rendered', () => {
    expect(
      cardWalletWrapper.find('Memo(ThumbnailWithRightIcon)').exists(),
    ).toBeTruthy()

    expect(cardWalletWrapper.find('Text').exists()).toBeFalsy()

    expect(cardWalletWrapper.find('TouchableOpacity').exists()).toBeFalsy()

    expect(
      cardWalletWrapper.find({ ratio: ImageRatios.middle }).exists(),
    ).toBeFalsy()

    expect(cardWalletWrapper.find('ButtonWithRipple').exists()).toBeTruthy()
  })

  it('expect default data to be rendered', () => {
    expect(roundedHeader.prop('source').uri).toEqual(dataItinerary.media)
    expect(title.at(0).prop('children')).toEqual(dataItinerary.title)
    expect(title.at(1).prop('children')).toEqual(dataItinerary.linkTitle)
  })

  dataItinerary.boxItems.forEach((item, index) => {
    it(`expect box ${index + 1} to be rendred correctly`, () => {
      expect(
        CardAllAccessWrapper.find('Box').at(index).prop('firstIcon'),
      ).toEqual(item.icon)
      expect(CardAllAccessWrapper.find('Box').at(index).prop('text')).toEqual(
        item.text,
      )
    })
  })

  it('can simulate on press events', () => {
    touchableOpacity.simulate('click')
    button.simulate('click')
  })
})

*/

