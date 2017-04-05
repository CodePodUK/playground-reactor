import App from './App';
import React from 'react';
import {shallow, render, mount} from 'enzyme';

// mock console calls
global.console = {warn: jest.fn(), log: jest.fn(), error: jest.fn()}

describe("App", () => {
  let props;
  let mountedApp;
  let renderedApp;
  let shallowRenderedApp;
  
  const mountApp = () => {
    if (!mountedApp) {
      mountedApp = mount(<App {...props} />);
    }
    return mountedApp;
  }
  
  const renderApp = () => {
    if (!renderedApp) {
      renderedApp = render(<App {...props} />);
    }
    return renderedApp;
  }

  const shallowRenderApp = () => {
    if (!shallowRenderedApp) {
      shallowRenderedApp = shallow(<App {...props} />);
    }
    return shallowRenderedApp;
  }

  beforeEach(() => {
    props = {};
    mountedApp = undefined;
    renderedApp = undefined;
    shallowRenderedApp = undefined;
  });
  
  it("always shallow renders", ()=>{
    let shallowRenderedApp = shallowRenderApp();
    expect(shallowRenderedApp).toBeDefined();
  });

  it("doesn't warn or send an error to console", ()=>{
    shallowRenderApp();
    expect(console.warn).toHaveBeenCalledTimes(0);
    expect(console.error).toHaveBeenCalledTimes(0);
  });

  it("doesn't log to console", ()=>{
    shallowRenderApp();
    expect(console.log).toHaveBeenCalledTimes(0);
  });

});