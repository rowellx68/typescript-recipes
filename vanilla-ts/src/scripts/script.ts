export namespace Vanilla {
  export function welcome() {
    alert('Welcome!');
  }
}

setTimeout(() => {
  Vanilla.welcome();
}, 2000);