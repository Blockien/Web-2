function rejectAfterDelay(ms) {
    return new Promise((resolve, reject) => setTimeout(() => reject(new Error('Promise rejected')), ms));
  }
  