import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Text } from 'informed';
import { connect } from 'react-redux';

import { setFilters, clearFilters } from '../../actions/filters';

class Filters extends Component {
  render() {
    const {filters, setFilters, clearFilters} = this.props;  // eslint-disable-line
    return (
      <Form id="filters" onSubmit={formState => setFilters(formState)}>
        Name:
        <Text field="name" id="name" data-cy="name" initialValue={filters.name} />
        City:
        <Text field="city" id="city" data-cy="city" initialValue={filters.city} />
        <button type="submit" data-cy="submit">Submit</button>
        <button type="button" data-cy="clear" onClick={clearFilters}>Clear</button>
      </Form>);
  }
}

Filters.defaultProps = {
  filters: null,
  setFilters: null,
  clearFilters: null,
};

Filters.propTypes = {
  filters: PropTypes.object,
  setFilters: PropTypes.func,
  clearFilters: PropTypes.func,
};

export default connect(({ filters }) => ({ filters }), { setFilters, clearFilters })(Filters);
