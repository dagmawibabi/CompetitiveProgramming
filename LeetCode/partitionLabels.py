class Solution:
    def partitionLabels(self, s: str) -> List[int]:
        lookup = {c: i for i, c in enumerate(s)}
        first = 0
        last = 0
        result = []
        for i, c in enumerate(s):
            last = max(last, lookup[c])
            if i == last:
                result.append(i-first+1)
                first = i+1
        return result
