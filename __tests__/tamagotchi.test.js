import { Tamagotchi } from './../src/tamagotchi.js';

describe('Bob', () => {
  jest.useFakeTimers();
  let bob;

  beforeEach(function() {
    bob = new Tamagotchi("Bob");
    bob.setHunger();
    bob.setBathroom();
    bob.setLove();
    bob.setRest();
  });

  afterEach(function() {
    jest.clearAllTimers();
  });

  test('should have a name and a food level of 10, a poop level of 0, a love level of 10, and a restLevel of 10 when it is created', () => {
    expect(bob.name).toEqual("Bob");
    expect(bob.foodLevel).toEqual(10);
    expect(bob.poopLevel).toEqual(0);
    expect(bob.loveLevel).toEqual(10);
    expect(bob.restLevel).toEqual(10);
  });

  test('should have a food level of 7 after 3001 milliseconds', () => {
    jest.advanceTimersByTime(30001);
    expect(bob.foodLevel).toEqual(7);
  });


  test('should get very hungry if the food level drops below zero', () =>  {
    bob.foodLevel = 0;
    expect(bob.starvedToDeath()).toEqual(true);
    // expect(bob.starvedToDeath()).toEqual(false);
  });

  test('should get very hungry if 10 seconds pass without feeding', function() {
    jest.advanceTimersByTime(100001);
    expect(bob.starvedToDeath()).toEqual(true);
  });

  test('should have a food level of ten if it is fed', function() {
    jest.advanceTimersByTime(9001);
    bob.feed();
    expect(bob.foodLevel).toEqual(10);
  });

  test('should have a poop level of 2 after 4001 milliseconds', () => {
    jest.advanceTimersByTime(4001);
    expect(bob.poopLevel).toEqual(2);
  });

  test('should get very dirty and die if the poop level rises above 4', function() {
    bob.poopLevel = 2;
    expect(bob.poopedToDeath()).toEqual(false);
  });

  test('should get very dirty and die if 8 seconds pass without cleaning', function() {
    jest.advanceTimersByTime(80001);
    expect(bob.poopedToDeath()).toEqual(true);
  });

  test('should have a love level of 8 after 8001 milliseconds', () => {
    jest.advanceTimersByTime(8001);
    expect(bob.loveLevel).toEqual(8);
  });

  test('should get very lonely and die if the love level drops below zero', function() {
    bob.loveLevel = 5;
    expect(bob.unlovedToDeath()).toEqual(false);
  });

  test('should get very lonely and die if 40 seconds pass without loving', function() {
    jest.advanceTimersByTime(40001);
    expect(bob.unlovedToDeath()).toEqual(true);
  });

  test('should have a rest level of 5 after 100001 milliseconds', () => {
    jest.advanceTimersByTime(100001);
    expect(bob.restLevel).toEqual(5);
  });

  test('should get very sleepy if the sleep level drops below zero', () =>  {
    bob.restLevel = 0;
    expect(bob.tiredToDeath()).toEqual(true);
    // expect(bob.starvedToDeath()).toEqual(false);
  });
  //
  // test('should get very hungry if 10 seconds pass without feeding', function() {
    //   jest.advanceTimersByTime(100001);
    //   expect(bob.starvedToDeath()).toEqual(true);
    // });

  });
