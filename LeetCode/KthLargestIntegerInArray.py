class Solution(object):
    def kthLargestNumber(self, nums, k):
        """
        :type nums: List[str]
        :type k: int
        :rtype: str
        """
        newNums = []
        for i in nums:
            newNums.append(int(i))
        newNums.sort()
        newNums.reverse()
        return str(newNums[k - 1])