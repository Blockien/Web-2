async function handlePromise() {
    try {
      const result = await somePromise();
      console.log('Promise resolved:', result);
    } catch (error) {
      console.error('Promise rejected:', error);
    }
  }
  