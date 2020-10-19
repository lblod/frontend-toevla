import { get, set } from '@ember/object';

/**
 * Exposes the state of the given property so it can be driven from
 * outside the component.  Drop-in replacement for @tracked.
 *
 * A property named `name` would traditionally be annotated
 * with @tracked to indicate its values may be updated.  This
 * decorator allows you to replace `@tracked` with `@exposedState`
 * which will create the equivalent of a tracked property, but which
 * will allow you to manage this state externally if desired.
 *
 * For a property named `name`, following properties will be
 * configurable from the outside:
 *
 * - `setName`: a function called to update the property when the
 *   component wants to update its value directly.
 *
 * - `name`: a property containing the current value.  Can be set
 *   externally.
 *
 * The property `name` can internally be used through the getter and
 * setter as expected.  If `updatedName` is not supplied, an internal
 * value is used automatically, the name of this variable is
 * `nameState` and it should not be updated manually.
 */
export default function( target, name, descriptor ) {
  const stateName = `${name}State`;
  const upcasedName = `${name.charAt(0).toUpperCase()}${name.slice(1)}`;
  const updateName = `set${upcasedName}`;

  return {
    enumerable: true,
    configurable: true,
    get() {
      if( get( this.args, updateName ) )
        return get( this.args, name );
      else
        return get( this, stateName );
    },
    set( state ) {
      if( get( this.args, updateName ) )
        get( this.args, updateName )( state );
      else
        set( this, stateName, state );
    }
  };
};
