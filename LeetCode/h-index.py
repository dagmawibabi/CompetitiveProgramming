class Solution:
    def hIndex(self, citations: List[int]) -> int:
        citations.sort(reverse=True)
        h = 0
        for x in citations:
            if x >= h + 1:
                h += 1
            else:
                break
        return h
