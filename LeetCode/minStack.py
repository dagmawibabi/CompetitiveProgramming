class MinStack:

    def __init__(self):        
        self.stack = []        
                
    def push(self, val: int) -> None:
        if self.stack:
            current_min = min(val, self.stack[-1][0])
            self.stack.append((current_min, val))
        else:
            self.stack.append((val, val))

    def pop(self) -> None:
        return self.stack.pop()[1]

    def top(self) -> int:
        return self.stack[-1][1]

    def getMin(self) -> int:
        return self.stack[-1][0]



# Your MinStack object will be instantiated and called as such:
# obj = MinStack()
# obj.push(val)
# obj.pop()
# param_3 = obj.top()
# param_4 = obj.getMin()