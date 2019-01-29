import {createElement, Component} from 'rax';
import renderer from 'rax-test-renderer';
import Console from '../';

describe('Console', () => {
  it('test typeof Console', () => {
    expect(typeof Console).toEqual('function');
  });
});
