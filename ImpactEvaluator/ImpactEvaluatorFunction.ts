// @ts-ignore

/**
 * @description Impact evaluator function. The parameters are based on the example parameters
 * within the followin document, which can be reference for further information on Impact Evaluators
 * https://threebox.notion.site/Impact-Evaluators-Over-Ceramic-Data-5ac733f30a454356914b22778f512381
 * @param dataList an object containing key:value pairs of addresses to contribution metric
 * @param trustedSeedList a list of initially trusted accounts
 * @param previousRewards a merkle root of previous rewards
 * @param extraData other verifiable data, e.g. ethereum state
 * @returns
 */
export function impactEvaluatorFunction(
  dataList: any,
  trustedSeedList: any,
  previousRewards: string,
  extraData: Array<any> | undefined = undefined
): any {
  // ----------------------------------------------------------------
  // This is an example impact evaluator implementation.
  // It multiplies the contribution metric given as input within
  // the dataList by 100.
  //
  // Please edit below this line to create your own implementation
  //  ----------------------------------------------------------------

  console.log("Production Impact Evaluator Function");
  dataList.forEach((data: any) => {
    const keys = Object.keys(data.data);
    for (const key of keys) {
      data.data[key] = data.data[key] * 100;
    }
  });
  let result = {
    newRewards: dataList.reduce(
      (output: any, data: any) => ({ ...output, ...data.data }),
      {}
    ),
    newTrustedSeed: trustedSeedList.reduce(
      (output: any, t: any) => [...output, ...t],
      []
    ),
  };

  return result;

  // The return value should return at least following properties within an object:
  // 1) newRewards
  // 2) newTrustedSeed
  //
  // NOTE: if the return object doesn't have above properties, the execution will fail.
  // In that case, please return empty array like so:
  // return { newRewards: [], newTrustedSeed: [] };
}
