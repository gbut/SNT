<?xml version="1.0" encoding="ISO-8859-1"?>

<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
    
  <!-- + dummy content for featured -->
  <h3><span class="category">HOT JOBS</span></h3>

  <article>
    <time datetime="2/8/11" pubdate="pubdate">2/8/11</time>
    <h4 class="clearfix">
      <a href="/careers/jobs/job.asp?" title="Senior Linux System Administrator">Senior Linux System Administrator</a>
      <span class="region">San Francisco Area</span>
    </h4>
  </article>

  <article>
    <time datetime="2/8/11" pubdate="pubdate">2/8/11</time>
    <h4 class="clearfix">
      <a href="/careers/jobs/job.asp?" title="Risk Analyst">Risk Analyst</a>
      <span class="region">New Delhi, India</span>
    </h4>
  </article>

  <article>
    <time datetime="2/15/11" pubdate="pubdate">2/15/11</time>
    <h4 class="clearfix">
      <a href="/careers/jobs/job.asp?" title="Principal Account Manager">Principal Account Manager</a>
      <span class="region">New York City Metro</span>
    </h4>
  </article>

  <article>
    <time datetime="2/22/11" pubdate="pubdate">2/22/11</time>
    <h4 class="clearfix">
      <a href="/careers/jobs/job.asp?" title="Senior Coordinator/System Administrator">Senior Coordinator/System Administrator</a>
      <span class="region">San Francisco Area</span>
    </h4>
  </article>
  <!-- / dummy content for featured -->

  <xsl:for-each select="joblist/category">
    
    <h3><span class="category"><xsl:value-of select="@name" /></span> Positions</h3>
    
    <xsl:for-each select="job">
      
      <article>
        <time datetime="{date}"><xsl:value-of select="date" /></time>
        <h4 class="clearfix">
          <a href="/careers/jobs/job.asp?{requisitionid}" title="{title}"><xsl:value-of select="title" /></a>
          <xsl:for-each select="region[position() = last()]">
            <span class="region"><xsl:value-of select="self::node()" /></span>
          </xsl:for-each>
        </h4>
      </article>
      
    </xsl:for-each>
    
  </xsl:for-each>
  
</xsl:template>

</xsl:stylesheet>