class Boat {
  color: string = 'red';

  @testDecorator
  get formattedColor(): string {
    return `The boat color is ${this.color}`;
  }

  @logError<Boat>('Something bad happened!')
  pilot(): void {
    throw new Error();
    console.log('swish');
  }
}

function testDecorator(target: any, key: string) {
  console.log('target', target);
  console.log('key', key);
}

function logError<T>(errorMessage: string) {
  return function (target: T, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;
    desc.value = function () {
      try {
        method();
      } catch (e) {
        console.log(errorMessage);
      }
    };
  };
}

// new Boat().pilot();
