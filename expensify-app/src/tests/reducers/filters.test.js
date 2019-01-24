import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should set up default filter value',()=>{
    const state = (filtersReducer(undefined,{type:'@@INIT'}));
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should set sort by amount',()=>{
    const state = (filtersReducer(undefined,{type:'SORT_BY_AMOUNT'}));
    expect(state.sortBy).toBe('amount');
});

test('should set sortBy date',()=>{
    const currentState = {
        text:'',
        startDate:undefined,
        endDate:undefined,
        sortBy:'amount'
    }
    const state = (filtersReducer(currentState,{type:'SORT_BY_DATE'}));
    expect(state.sortBy).toBe('date');
});

test('should set text filter',()=>{
    const state = (filtersReducer(undefined,{type:'SET_TEXT_FILTER', text:'test'}));
    expect(state.text).toBe('test');
});

test('should set startDate filter',()=>{
    const startDate = moment();
    const state = (filtersReducer(undefined,{type:'SET_START_DATE', startDate}));
    expect(state.startDate).toBe(startDate);
});

test('should set endDate filter',()=>{
    const endDate = moment();
    const state = (filtersReducer(undefined,{type:'SET_END_DATE', endDate}));
    expect(state.endDate).toBe(endDate);
});