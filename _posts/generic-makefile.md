---
title: "Generic Makefile"
excerpt: "hello"
date: "2020-03-16T05:35:07.322Z"
---

My generic makefile.

# Heloo

```makefile

# First rule
all: $(TGTDIR)/$(TARGET) | $(TGTDIR)

# Linking
$(TGTDIR)/$(TARGET): $(OBJECTS) | $(BUILDDIR)
	$(CC) $^ -o $(TGTDIR)/$(TARGET) $(INC) $(LDFLAGS) $(LIB)

# C compilations
$(BUILDDIR)/%.o: $(SRCDIR)/%.c include/*.h
	$(CC) $(CCFLAGS) $(INC) -c -o $@ $<

# CPP compilations
$(BUILDDIR)/%.o: $(SRCDIR)/%.cpp include/*.hpp templates/*.tpp
	$(CPPC) $(CPPCFLAGS) $(INC) -c -o $@ $<

# CUDA compilations
$(BUILDDIR)/%.o: $(SRCDIR)/%.cu include/*.cuh templates/*.tpp
	$(NVCC) $(NVCCFLAGS) $(ARCHFLAGS) $(INC) -c -o $@ $<

# Objects directory
$(BUILDDIR):
	@mkdir -p $(BUILDDIR)

# Target directory
$(TGTDIR):
	@mkdir -p $(TGTDIR)

# Cleaning
clean:
	$(RM) -r $(BUILDDIR)/*.o

# Diagnostic
show:
	@echo "Sources: $(SOURCES)"
	@echo "Objects: $(OBJECTS)"
	@echo "CUDA HOME: $(CUDA_PATH)"
	@echo "Target arch: $(MYGPU_ARCH)"

# Code distribution overall
cloc:
	cloc .

# Clean and make again
again:
	@make clean && make

.PHONY: all clean show cloc again
```
