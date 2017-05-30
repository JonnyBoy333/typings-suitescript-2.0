    interface fooRecord {
        /** Returns the value of a field. */
        getValue(options: 'foo'): string;
    }

    interface barRecord {
        /** Returns the value of a field. */
        getValue(options: 'bar'): string;
    }

    interface fooLoadFunction {
        /** Loads a Foo type record. */
        (options: 'foo'): fooRecord;
        (options: 'bar'): barRecord;
    }

    // interface barLoadFuntion {
    //     /** Loads a Bar type record. */
    //     (options: 'bar'): barRecord;
    // }

    export const load: fooLoadFunction;