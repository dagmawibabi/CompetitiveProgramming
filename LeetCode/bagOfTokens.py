class Solution:
    def bagOfTokensScore(self, tokens: List[int], power: int) -> int:
        tokens.sort()
        result, points = 0, 0
        left, right = 0, len(tokens)-1
        while left <= right:
            if power >= tokens[left]:
                power -= tokens[left]
                left += 1
                points += 1
                result = max(result, points)
            elif points > 0:
                points -= 1
                power += tokens[right]
                right -= 1
            else:
                break
        return result
