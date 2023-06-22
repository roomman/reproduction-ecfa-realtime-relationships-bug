import Model, { attr, belongsTo } from '@ember-data/model';

export default class BookingModel extends Model {
  @attr('string') reference;

  @belongsTo('customer', {
    async: true,
    inverse: 'bookings',
    isRealtime: true, // toggle this line to expose the bug
  })
  customer;
}
