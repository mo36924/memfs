export default typeof BigInt === 'function'
  ? BigInt
  : () => {
      throw new Error('BigInt is not supported in this environment.');
    };
