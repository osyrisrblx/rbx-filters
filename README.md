# rbx-filters
Convenient filter functions for roblox-ts functional programming

## filterIsA
```TS
game.GetDescendants()
	.filter(filterIsA("BasePart"))
	.forEach(x => print(x.Size)); // Part | WedgePart | ...
```

## filterClass
```TS
game.GetDescendants()
	.filter(filterClass("Script"))
	.forEach(x => print(x.GetFullName())); // only Script objects, no LocalScript
```

## filterProps
```TS
game.GetDescendants()
	.filter(filterIsA("BasePart"))
	.filter(
		filterProps({
			Size: new Vector3(4, 4, 4)
		})
	)
	.forEach(x => print(x.Size)); // 4, 4, 4
```