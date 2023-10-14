import { AdditionalBlock, AdditionalBlockName } from '@entities/page';

export function getAdditionalBlockData<TData = unknown>(
  blocks: AdditionalBlock[],
  name: AdditionalBlockName,
) {
  const block = blocks.find(({ __component }) => {
    return __component === name;
  });
  return (block?.data as TData[]) ?? [];
}