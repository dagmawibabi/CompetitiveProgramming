# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def sortList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        values = []
        start = head
        while head:
            values.append(head.val)
            head = head.next

        values.sort()
        values = collections.deque(values)

        head = start
        while head:
            head.val = values.popleft()
            head = head.next

        return start