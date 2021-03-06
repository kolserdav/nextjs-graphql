/**
 * Universal reducer for all cases of store
 */
import * as Types from '../../next-env';

const initialType: Types.ActionTypes.All = 'INITIAL';

const initialState: Types.Reducer<any> = {
  type: initialType,
  body: {
    type: initialType,
    body: {},
  },
};

export default function reducer(
  state: Types.Reducer<any> = initialState,
  action: Types.Action<any>
): Types.Reducer<any> {
  state.type = action.type;
  state.body = action.body;
  return Object.assign(state, { [action.type]: action });
}
