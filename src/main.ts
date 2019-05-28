export function filterIsA<T extends keyof Instances>(className: T) {
	return (instance: Instance): instance is Instances[T] => instance.IsA(className);
}

export function filterClass<T extends keyof Instances>(className: T) {
	return (instance: Instance): instance is StrictInstanceByName<T> => instance.ClassName === className;
}

export function filterProps<T extends Instance>(props: Partial<Pick<T, GetProperties<T>>>) {
	return (instance: T) => {
		for (const [prop, value] of Object.entries(props)) {
			if (instance[prop] !== value) {
				return false;
			}
		}
		return true;
	};
}
