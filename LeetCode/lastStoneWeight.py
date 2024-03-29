class Solution:
    def lastStoneWeight(self, stones: List[int]) -> int:
        max_heap = [-x for x in stones]
        heapq.heapify(max_heap)
        for i in range(len(stones)-1):
            x, y = -heapq.heappop(max_heap), -heapq.heappop(max_heap)
            heapq.heappush(max_heap, -abs(x-y))
        return -max_heap[0]
