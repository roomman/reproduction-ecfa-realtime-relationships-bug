import Model, { attr, hasMany } from '@ember-data/model';

export default class CustomerModel extends Model {
  @attr('string') name;

  @hasMany('booking', {
    async: true,
    inverse: 'customer',
  })
  bookings;
}
