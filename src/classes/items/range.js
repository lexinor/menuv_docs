import { Item } from './item';

/**
 * Range item for MenuV
 * @class
 * @implements {Item}
 * @extends {Item}
 */
class RangeItem extends Item {
    /**
     * Defined type of {@link #RangeItem|RangeItem}
     * @memberof RangeItem
     * @access protected
     * @readonly
     * @type {string}
     * @default 'range'
     * @override
     */
    __type = "range";

    /**
     * Primary event of {@link #RangeItem|RangeItem}
     * @memberof RangeItem
     * @access protected
     * @type {string}
     * @default 'OnSelect'
     * @readonly
     * @override
     */
    __event = "OnSelect";

    /**
     * Value of range item (default lowest possible value)
     * @memberof RangeItem
     * @access public
     * @type {number}
     * @default 0
     */
    Value = 0;

    /**
     * Minimal possible value
     * @memberof RangeItem
     * @access public
     * @type {number}
     * @default 0
     */
    Min = 0;

    /**
     * Maximal possible value
     * @memberof RangeItem
     * @access public
     * @type {number}
     * @default 0
     */
    Max = 0;

    /**
     * Change {@link #RangeItem.Min|RangeItem.Min}
     * @param {number} input New minimal value
     */
    SetMinValue(input) {};

    /**
     * Change {@link #RangeItem.Max|RangeItem.Max}
     * @param {number} input New maximal value
     */
    SetMaxValue(input) {};
};

/**
 * Event will be triggered when user changed range state
 * @memberof RangeItem
 * @access public
 * @this RangeItem
 * @event RangeItem#change
 * @param {RangeItem} item Current changed range item
 * @param {number} newValue New value of range item
 * @param {number} oldValue Previous value of range item
 * @example
item:On('change', function(item, newValue, oldValue)
    print('You have changed them range :)')
end)
 */
RangeItem.On(RangeItem, 'change', function(item, newValue, oldValue) {});

/**
 * Event will be triggered when user pressed 'ENTER' in range item
 * @memberof RangeItem
 * @access public
 * @this RangeItem
 * @event RangeItem#select
 * @param {RangeItem} item Current selected range item
 * @param {number} value Value of range item
 * @example
item:On('select', function(item, value)
    print('You have select a range option :)')
end)
 */
RangeItem.On(RangeItem, 'select', function(item, value) {});

export {
    RangeItem
}