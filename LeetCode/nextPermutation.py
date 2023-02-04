class Solution:
    def nextPermutation(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        k, l = -1, 0
        for i in range(len(nums) - 1):
            if nums[i] < nums[i + 1]:
                k = i

        if k == -1:
            nums.reverse()
            return

        for i in range(k + 1, len(nums)):
            if nums[i] > nums[k]:
                l = i

        nums[k], nums[l] = nums[l], nums[k]
        nums[k + 1:] = nums[:k:-1]
