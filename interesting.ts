const Activity = {
    id: "",
    title: "",
    body: "",
    json: {}
}

type Activity1 = typeof Activity;

const headers: Array<Object> = Object.keys(Activity).map(key => {
    return { text: key, value: key }
});
enum e {A = 'A', B ='B'}
type aa = Required<>
function extract<T>(properties: Record<keyof T, true>){
    return function<TActual extends T>(value: TActual){
        let result = {} as T;
        type a = keyof T;
        
        for (const property of Object.keys(properties) as Array<keyof T>) {
            result[property] = value[property];
        }
        return result;
    }
}

interface ISpecific { A: string; B: string; }
const extractISpecific = extract<ISpecific>({ 
    // This object literal is guaranteed by the compiler to have no more and no less properties then ISpecific
    A: true,
    B: true
})
class Extended implements ISpecific { public A: string = '1'; public B: string = '2'; public C: string = '3'; }

let someObject = new Extended(); 
let subset = extractISpecific(someObject); 

type FunctionReturnType<FunctionType extends (...args: any) => any> = FunctionType extends (...args: any) => infer ReturnType ? ReturnType : any;
function RanInteger(input: number) {
    return input + 10
}
type a = FunctionReturnType<typeof RanInteger>;

function call<Arg extends any[]>(fncall: (...args: Arg) => any, ...args: Arg) {
    type b = typeof RanInteger;
    type c = typeof fncall;
    type a = FunctionReturnType<c>;
    return fncall(...args)
}
call(RanInteger, '10');
