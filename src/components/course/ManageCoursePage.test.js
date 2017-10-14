import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import {ManageCoursePage} from './ManageCoursePage';

describe('Manage Course Page', () => {
  it('sets an error message when trying to save empty title', () => {
    //const wrapper = mount(<ManageCoursePage/>); // bring error
    //const wrapper = mount(<Provider store={store}><ManageCoursePage/></Provider>);
    // another way to do it as recommended in the previous error

    //now the preferred way
    //need to add export to managecoursepage class in file,
    //as well as named import in imports, to import not the default but other exported class
    // and now the initial idea will work
    const props = {
      authors: [],
      actions: {saveCourse: () => {return Promise.resolve();}},
      course : {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''}
    };
    const wrapper = mount(<ManageCoursePage {...props}/>);
    const saveButton = wrapper.find('input').last();
    expect(saveButton.prop('type')).toBe('submit');
    saveButton.simulate('click');

    expect(wrapper.state().errors.title).toBe('Title must be at least 5 characters.');
  });
});
