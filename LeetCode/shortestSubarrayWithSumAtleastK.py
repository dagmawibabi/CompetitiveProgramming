class Solution:
    def shortestSubarray(self, nums: List[int], k: int) -> int:
        accumulated_sum = [0]*(len(nums)+1)
        for i in range(len(nums)):
            accumulated_sum[i+1] = accumulated_sum[i]+nums[i]

        result = float("inf")
        mono_increasing_q = collections.deque()
        for i, curr in enumerate(accumulated_sum):
            while mono_increasing_q and curr <= \
                    accumulated_sum[mono_increasing_q[-1]]:
                mono_increasing_q.pop()
            while mono_increasing_q and \
                    curr-accumulated_sum[mono_increasing_q[0]] >= k:
                result = min(result, i-mono_increasing_q.popleft())
            mono_increasing_q.append(i)
        return result if result != float("inf") else -1
